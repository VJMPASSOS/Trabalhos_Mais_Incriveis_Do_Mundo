package br.com.lavinne.Sudoku_Incrivel.layout.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ClasseDeControle {

    @GetMapping("/sudoku")
    public String showSudoku9x9() {
        return "Sudoku9x9";
    }

    @GetMapping("/sudoku6")
    public String showSudoku6x6() {
        return "Sudoku6x6";
    }

    @GetMapping("/sudoku4")
    public String showSudoku4x4() {
        return "Sudoku4x4";
    }
    
}
