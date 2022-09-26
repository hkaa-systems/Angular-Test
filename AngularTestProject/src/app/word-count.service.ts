import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConstant } from './api-constant';
import 'rxjs/add/operator/map';

@Injectable({
	providedIn: 'root'
})
export class WordCountService {

	constructor(private httpClient: HttpClient) {
	}

	getCount(params: any): Observable<HttpResponse<any>> {
		return this.httpClient.get<any>(ApiConstant.WORD_COUNT,{params});
	}

}
