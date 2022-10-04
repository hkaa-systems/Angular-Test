import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConstant } from './api-constant';

@Injectable({
	providedIn: 'root'
})
export class WordCountService {

	constructor(private httpClient: HttpClient) {
	}

	getCount(params: Object): Observable<any> {
		return this.httpClient.get<any>(ApiConstant.WORD_COUNT,params).pipe();
	}

}
