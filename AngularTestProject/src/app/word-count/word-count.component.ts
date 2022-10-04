import { Component, OnInit } from '@angular/core';
import { WordCountService } from '../word-count.service';

@Component({
    selector: 'app-word-count',
    templateUrl: './word-count.component.html',
    styleUrls: ['./word-count.component.css']
})
export class WordCountComponent implements OnInit {

    words : string = '';
    count : number = 0;
    countResult : Object = {}

    constructor(private wordCountService: WordCountService) {
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
            const param = {
                "words": words
            };

            this.wordCountService.getCount(param)
            .subscribe( 
                (res) => {
                    this.countResult = res;
            });

        } catch (error) {   

        }
    }

}
