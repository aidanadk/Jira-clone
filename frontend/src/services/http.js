import { baseUrl } from './api';

export class Http {
  async get(endpoint) {
		const response = await fetch(baseUrl + endpoint)
		const json = await response.json();
		return json
	}
  async post(endpoint, body) {
		return await fetch(baseUrl + endpoint, {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {'Content-Type': 'application/json'}
		})
	}
  async put(endpoint,body) {
		return await fetch(baseUrl + endpoint, {
			method: 'PUT',
			body: JSON.stringify(body),
			headers: {'Content-Type': 'application/json'}
		})
	}
  async patch(endpoint,body) {
		return await fetch(baseUrl + endpoint, {
			method: 'PATCH',
			body: JSON.stringify(body),
			headers: {'Content-Type': 'application/json'}
		})
	}
  async delete(endpoint) {
		return await fetch(baseUrl + endpoint, {
			method: 'DELETE',
			headers: {'Content-Type': 'application/json'}
		})
	}
}
