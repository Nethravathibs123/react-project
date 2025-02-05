export const mockAuth = {
    isAuthenticated: false,
    signIn(callback) {
      this.isAuthenticated = true;
      setTimeout(callback, 100); 
    },
    signOut(callback) {
      this.isAuthenticated = false;
      setTimeout(callback, 100); 
    },
  };