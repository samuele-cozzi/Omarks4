import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { SettingsService } from './settings.service'
//import undefined = require('firebase/empty-import');

@Injectable({
    providedIn: 'root'
})

export class Search {
    public query: string = "";
    public searching: boolean = false;

    public searchFacets: any[] = [];
    public searchItems: any[] = [];

    private service_url: string = "";
    private headers: HttpHeaders;

    constructor(
        private http: HttpClient,
        private settings: SettingsService
    ) { }

    private init() {
        if (this.service_url == "") {
            let index = this.settings.settings.algoliaIndex;
            let application_id = this.settings.settings.algoliaApplicationId;
            let api_key = this.settings.settings.algoliaApiKey;

            this.service_url = 'https://' + application_id + '.algolia.net/1/indexes/' + index;

            this.headers = new HttpHeaders({
                'Content-Type': 'application/json',
                'Accept': 'application/JSON',
                'X-Algolia-API-Key': api_key,
                'X-Algolia-Application-Id': application_id
            });
        }
    }

    private handleError(error: any): Promise<any> {
        console.log('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    public async get_facets(): Promise<any> {
        if(this.searchFacets.length > 0){
            return;
        }
        
        this.init();

        let _response = await this.http.get(this.service_url + '?facets=*', { headers: this.headers });
        _response.subscribe((val) => {
            console.log(val);

            this.searchFacets = [];

            for (var key1 in val["facets"]["facets.tag"]) {
                this.searchFacets.push({
                    'key': "facets.tag",
                    'value': key1,
                    'count': val["facets"]["facets.tag"][key1]
                });

            }
        });
    }

    // public get_filtered_facets(key: string, value: string, hitsPerPage: number = 20, page: number = 0): Promise<any> {
    //     this.init();

    //     let body = {
    //         "facetFilters": key + ':' + value,
    //         "hitsPerPage": hitsPerPage,
    //         "page": page
    //     }


    //     return this.http.post(this.service_url + '/query', body, { headers: this.headers })
    //         .toPromise()
    //         .then(response => response.json().hits)
    //         .catch(this.handleError);
    // }

    // public get_query(query: string, hitsPerPage: number = 20, page: number = 0): Promise<any> {
    //     this.init();

    //     let body = {
    //         "query": query,
    //         "hitsPerPage": hitsPerPage,
    //         "page": page
    //     }

    //     return this.http.post(this.service_url + '/query', body, { headers: this.headers })
    //         .toPromise()
    //         .then(response => response.json().hits)
    //         .catch(this.handleError);
    // }

    // public save_item(item): Promise<any> {

    //     return this.http.post(this.service_url, item, { headers: this.headers })
    //         .toPromise()
    //         .then(response => response.json().hits)
    //         .catch(this.handleError);
    // }

    // public delete_item(item): Promise<any> {

    //     return this.http.delete(this.service_url + '/' + item.objectID, { headers: this.headers })
    //         .toPromise()
    //         .then(response => response.json())
    //         .catch(this.handleError);
    // }
}
