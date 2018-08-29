package com.ajaxdemo.AjaxLab;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class LabController {

	@RequestMapping("/")
	public ModelAndView index() {
		return new ModelAndView("index");
	}
}
