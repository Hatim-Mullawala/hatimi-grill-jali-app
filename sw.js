// This tells Android "I am a valid background worker"
self.addEventListener('fetch', function(event) {});

// This automatically closes the notification when you tap on it
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
});