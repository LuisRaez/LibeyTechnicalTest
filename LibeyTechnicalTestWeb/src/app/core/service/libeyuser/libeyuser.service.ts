import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { LibeyUser } from "src/app/entities/libeyuser";
@Injectable({
	providedIn: "root",
})
export class LibeyUserService {

	private baseUrl = `${environment.pathLibeyTechnicalTest}LibeyUser/`;

	constructor(private http: HttpClient) {}

	Find(documentNumber: string): Observable<LibeyUser> {
		const uri = `${this.baseUrl}${documentNumber}`;
		return this.http.get<LibeyUser>(uri);
	}

	FindAll(): Observable<LibeyUser[]> {
    return this.http.get<LibeyUser[]>(this.baseUrl);
  }

  // POST: Create a new user
  Create(user: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, user);
  }

  // PUT: Update a user by document number
  Update(documentNumber: string, user: LibeyUser): Observable<any> {
    const uri = `${this.baseUrl}${documentNumber}`;
    return this.http.put<any>(uri, user);
  }

  // DELETE: Delete a user by document number
  Delete(documentNumber: string): Observable<any> {
    const uri = `${this.baseUrl}${documentNumber}`;
    return this.http.delete<any>(uri);
  }

}