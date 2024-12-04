let stompClient = null;
$("#success").text("Disconnected");
        function connect() {
        const ip = document.getElementById('ip').value;
            const socket = new SockJS(ip); // Se conectează la /chat
            stompClient = Stomp.over(socket);

            stompClient.connect({}, frame => {
                console.log('Connected: ' + frame);
                $("#ip").hide();
                $("#connectBtn").hide();
                $("#success").text("Success connected");
                // Abonează-te la canalul "/topic/chat"
                stompClient.subscribe('/topic/chat', message => {
                    showMessage(JSON.parse(message.body).content);
                });
            }, error => {
                console.error('Error connecting to WebSocket:', error);
            });
        }

        function disconnect() {
            if (stompClient !== null) {
                stompClient.disconnect();
                $("#success").text("Disconnected");
            }
            $("#ip").show();
            $("#connectBtn").show();
            console.log("Disconnected");
        }

        function sendMessage() {
            const name = document.getElementById('name').value;
            const message = document.getElementById('message').value;
            if (stompClient && stompClient.connected) {
                stompClient.send('/app/message', {}, JSON.stringify({ name: name, content: message }));
            }
        }

        function showMessage(message) {
            const chatBox = document.getElementById('chatBox');
            const messageElement = document.createElement('div');
            messageElement.textContent = message;
            chatBox.appendChild(messageElement);
        }