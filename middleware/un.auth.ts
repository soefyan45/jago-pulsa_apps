const token = useCookie('token')
import { Buffer } from 'buffer'
export default defineNuxtRouteMiddleware(async(to, from) => {
	if(token.value){
		return navigateTo('/apps')
	}
})