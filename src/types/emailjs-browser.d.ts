// types/emailjs-browser.d.ts

declare module '@emailjs/browser' {
  // Define any types or interfaces based on your needs
  export function send(
    serviceID: string,
    templateID: string,
    templateParams: Record<string, any>,
    userID: string
  ): Promise<any>;
  
  // Add other functions or types if needed
}
