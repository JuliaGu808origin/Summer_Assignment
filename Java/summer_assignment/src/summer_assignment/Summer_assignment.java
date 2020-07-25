/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package summer_assignment;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

/**
 *
 * @author Julia
 */
public class Summer_assignment { // demo begin

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
//        Example 1
//        skriv ett program som matar in en text. 
//        Om man skriver in "Stefan" ska programmet skriva ut "Hej Stefan" 
//        annars ska programmet skriva ut "Jahadu är inte Stefan"
        
        Scanner sc = new Scanner(System.in);
        System.out.println("skriva text: (\"ENTER\"in slutet)");
        String text = "";
        if(sc.hasNextLine()) text = sc.nextLine();
        if(text.trim().equals("Stefan")) System.out.println("Hej Stefan");
        else System.out.println("Jaha du är inte Stefan");
        
        
//        Example 2
//        skriv ett program som matar in ett tal 10 gånger (loop) 
//        Skriv sen ut summan av de 10 inmatade talen

        List<Double> lists = new ArrayList();
        double total = 0;
        int index = 0;
        
        while(true){
            System.out.println("skriva ett tal: (\"ENTER\"in slutet)");
            if(sc.hasNextLine()) text = sc.nextLine();
            try{
                double num = Double.parseDouble(text);
                lists.add(num);
                index += 1;
            }catch(NumberFormatException ex){
                System.out.println("felt tal " + text + " !");
            }
            if(index == 10) break;
        }
        total = lists.stream().mapToDouble(each -> each).sum();
        double totalScript = Math.round(total*100);
        double totalRound = totalScript / 100 ;
        System.out.println("summan: " + totalRound);

    } 
}
