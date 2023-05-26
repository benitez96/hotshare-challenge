import { Category, Daum, Info } from '../interfaces/airbnbdata';
import data from './data.json';


interface PaginatedData {
	data: Daum[],
	total: number,
	next: number | null,
	prev: number | null
}

export const api = {

	getCategories: () => {
		return new Promise<Category[]>((resolve, _) => {
			setTimeout(() => {
				resolve(data.categories);
			}, 500)
		})
	},

	getData: ({filter=null}: {filter?: string | null}) => {
		let aux = data.data as Daum[]

		if (filter) {
			aux = aux.filter(item => item.info.title.toLowerCase().includes(filter.toLowerCase()))
		}

		return new Promise<Daum[]>((resolve, _) => {
			setTimeout(() => {
				resolve(aux);
			}, 500)
		})

	},
	getDataPaginated:
		({ filter=null, limit=20, offset=0 }:
		 { filter?: string | null, limit?: number, offset?: number }) => {
		let aux = data.data as Daum[]

		if (filter) {
			aux = aux.filter(item => 
							item.info.title.toLowerCase().includes(filter.toLowerCase())
							|| item.info.description.toLowerCase().includes(filter.toLowerCase())
							
							)
		}

		const page = aux.slice(offset, offset+limit)

		const res: PaginatedData = {
			data: page,
			total: aux.length,
			next: offset+limit < aux.length ? offset+limit : null,
			prev: offset-limit >= 0 ? offset-limit : null
		}

		return new Promise<PaginatedData>((resolve, _) => {
			setTimeout(() => {
				resolve(res);
			}, 500)
		})

	}

}
