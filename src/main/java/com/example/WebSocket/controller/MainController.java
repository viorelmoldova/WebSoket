package com.example.WebSocket.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MainController {

    @GetMapping({"", "/"})
    public ModelAndView start(){
        return new ModelAndView("redirect:/web-chat");
    }

    @GetMapping("web-chat")
    public ModelAndView getChatPage(){
        return new ModelAndView("chat");
    }

}
