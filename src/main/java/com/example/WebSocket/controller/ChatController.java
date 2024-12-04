package com.example.WebSocket.controller;

import com.example.WebSocket.models.Greeting;
import com.example.WebSocket.models.HelloMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

@Controller
public class ChatController {

    @MessageMapping("/message") // Primirea mesajului de la client
    @SendTo("/topic/chat") // Trimiterea mesajului la toți abonații
    public Greeting chat(HelloMessage message) throws Exception {
        // Poți adăuga aici un delay pentru a simula procesarea mesajului
        Thread.sleep(1000);
        return new Greeting("Hello, " + HtmlUtils.htmlEscape(message.getName()) + "!");
    }
}
