import { defineStore } from 'pinia'
const token 	= useCookie('token')
const profile 	= useCookie('profile')
// const products 	= useCookie('products')
// import {ref} from "vue";
// import {useCookie} from "nuxt/app";
// const cookie = useCookie('token')
// const token = ref(cookie);
export const useAuth = defineStore({
	id: 'auth',
	state: () => ({
		value:  token.value
	}),

	getters: {
		valueWithName: state => `Value is ${state.value}`
	},

	actions: {
		setBearer(bearer : string) {
			this.value = bearer
			token.value = bearer
		}
	}
})
export const useProfile = defineStore({
	id: 'profile',
	state: () => ({
		value:  profile.value
	}),
	actions: {
		setProfile(data : any) {
			this.value = data
			profile.value = data
		}
	}
})
// export const useProducts = defineStore({
// 	id: 'products',
// 	state: () => ({
// 		value:  products.value
// 	}),
// 	actions: {
// 		setProducts(data : any) {
// 			// console.log(data)
// 			this.value = data
// 			products.value = data
// 			// console.log(products.value)
// 		}
// 	}
// })