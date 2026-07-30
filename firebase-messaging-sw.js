// Import Firebase background libraries
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// 1. Paste your Firebase Config here
const firebaseConfig = {
    apiKey: "AIzaSyBitqayX2VPBNpV3wpDKyZEnJxE7dgWEWE",
    projectId: "hatimi-jali-app",
    messagingSenderId: "631367054682",
    appId: "1:631367054682:web:884fa53b80f7b21b542f63"
};

// Initialize the background app
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// 2. Listen for background messages and show the branded alert
messaging.onBackgroundMessage(function(payload) {
    console.log('Background alert received!');
    
    const notificationTitle = "Hatimi Hardware Alert";
    const notificationOptions = {
        body: payload.notification.body, 
        icon: '/hatimi-logo-192.png',
        badge: '/hatimi-logo-192.png',
        tag: 'jali-cut-alert'
    };

    // This triggers the phone to buzz and show the alert
    self.registration.showNotification(notificationTitle, notificationOptions);
});