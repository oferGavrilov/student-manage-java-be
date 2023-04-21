package com.ofercodes.studentsystem.controller;

import com.ofercodes.studentsystem.model.Student;
import com.ofercodes.studentsystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/student")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String addS(@RequestBody Student student) {
        studentService.saveStudent(student);
        return "new student is added";
    }
}
