import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-word-count',
    templateUrl: './word-count.component.html',
    styleUrls: ['./word-count.component.css']
})
export class WordCountComponent implements OnInit {

    words: string = '';
    count: number = 0;

    constructor() {
        try {
            
        } catch (error) {

        }
    }

    ngOnInit(): void {
    }

    getWordCount(words: string) {
        try {
            // write code to call wordCount service
            // get response and store response in count             
            

        } catch (error) {   

        }
    }

}
