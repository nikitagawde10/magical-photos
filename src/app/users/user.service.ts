import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, throwError } from 'rxjs';
import { mockUsers, PhotosList, User } from './user.utils';
import { HttpClient } from '@angular/common/http';

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  // Private subjects for state management
  private authStateSubject = new BehaviorSubject<AuthState>({
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
  });

  private usersSubject = new BehaviorSubject<User[]>(mockUsers);

  // Public observables
  public authState$ = this.authStateSubject.asObservable();
  public users$ = this.usersSubject.asObservable();

  // Derived observables for convenience
  public isAuthenticated$ = this.authState$.pipe(
    map((state) => state.isAuthenticated)
  );

  public currentUser$ = this.authState$.pipe(map((state) => state.user));

  public isLoading$ = this.authState$.pipe(map((state) => state.loading));

  public authError$ = this.authState$.pipe(map((state) => state.error));

  // Helper method to update auth state
  private updateAuthState(newState: Partial<AuthState>): void {
    const currentState = this.authStateSubject.value;
    this.authStateSubject.next({ ...currentState, ...newState });
  }

  // Login method with proper Observable return
  loginUser(mobile: number, password: string): Observable<boolean> {
    // Set loading state
    this.updateAuthState({ loading: true, error: null });

    // Simulate async operation (you can replace with HTTP call)
    return new Observable((observer) => {
      setTimeout(() => {
        const currentUsers = this.usersSubject.value;
        const foundUser = currentUsers.find(
          (user) => user.phoneNumber === mobile && user.password === password
        );

        if (foundUser) {
          // Successful login
          this.updateAuthState({
            isAuthenticated: true,
            user: foundUser,
            loading: false,
            error: null,
          });

          // Save to localStorage for persistence
          localStorage.setItem('currentUser', JSON.stringify(foundUser));

          observer.next(true);
          observer.complete();
        } else {
          // Failed login
          this.updateAuthState({
            isAuthenticated: false,
            user: null,
            loading: false,
            error: 'Invalid phone number or password',
          });

          observer.next(false);
          observer.complete();
        }
      }, 1000); // Simulate network delay
    });
  }

  // Logout method
  logout(): void {
    this.updateAuthState({
      isAuthenticated: false,
      user: null,
      loading: false,
      error: null,
    });
    localStorage.removeItem('currentUser');
  }

  // Get current user (synchronous)
  getCurrentUser(): User | null {
    return this.authStateSubject.value.user;
  }

  // Get user photos (returns Observable)
  getUserPhotos(): Observable<PhotosList[]> {
    const currentUser = this.getCurrentUser();
    if (!currentUser) {
      return throwError(() => new Error('No user logged in'));
    }

    return of(currentUser.masterPhotosList);
  }

  // Get user photos (synchronous version)
  getUserPhotosSync(): PhotosList[] {
    const currentUser = this.getCurrentUser();
    return currentUser?.masterPhotosList ?? [];
  }

  // Remove photo collection with state update
  removePhotoCollection(photoId: string): Observable<boolean> {
    const currentUser = this.getCurrentUser();
    if (!currentUser) {
      return throwError(() => new Error('No user logged in'));
    }

    return new Observable((observer) => {
      try {
        // Find and remove the photo from the user's collections
        const updatedMasterPhotosList = currentUser.masterPhotosList
          .map((photoList) => ({
            ...photoList,
            photosList: photoList.photosList.filter(
              (photo) => photo.id !== photoId
            ),
          }))
          .filter((photoList) => photoList.photosList.length > 0); // Remove empty collections

        const updatedUser: User = {
          ...currentUser,
          masterPhotosList: updatedMasterPhotosList,
        };

        // Update the auth state with the modified user
        this.updateAuthState({
          user: updatedUser,
        });

        // Update localStorage
        localStorage.setItem('currentUser', JSON.stringify(updatedUser));

        // Update the users array as well
        const allUsers = this.usersSubject.value;
        const updatedUsers = allUsers.map((user) =>
          user.id === updatedUser.id ? updatedUser : user
        );
        this.usersSubject.next(updatedUsers);

        observer.next(true);
        observer.complete();
      } catch (error) {
        observer.error(error);
      }
    });
  }

  // Get user page header image
  getUserPageHeader(): Observable<Blob> {
    const url = 'https://picsum.photos/id/183/1200/400';
    return this.http.get(url, { responseType: 'blob' });
  }

  // Clear any authentication errors
  clearAuthError(): void {
    this.updateAuthState({ error: null });
  }

  // Check if user is authenticated (synchronous)
  isAuthenticated(): boolean {
    return this.authStateSubject.value.isAuthenticated;
  }
}
