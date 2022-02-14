import { Http } from './http';

export class Issues {
  http = new Http();
	issues = this.http.get('/issues')

  async create(body) {
		const issues = await this.issues;

    const data = {
      ...issues,
      tasks: {
        ...issues.tasks,
        [body.id]: body,
      },
    };

    return await this.http.post('/issues', data);
  }
  async read() {
    return await this.issues;
  }
  async update() {}
  async delete(id) {
    return await this.http.delete('/issues/' + id);
  }
  async updateColumns(columnId, taskId) {
		const issues = await this.issues;

    const body = {
      columns: {
        ...issues.columns,
        [columnId]: {
          ...issues.columns[columnId],
          taskIds: [...issues.columns[columnId].taskIds, taskId],
        },
      },
    };

    return await this.http.patch('/issues', body);
  }
}
