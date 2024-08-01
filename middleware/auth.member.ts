import { Buffer } from 'buffer'
const token = useCookie('token')
const Profile = useCookie('profile')
import {useAuth,useProfile} from "~/stores/auths"
const auth = useAuth()
const profile = useProfile()
// const products = useProducts()

export default defineNuxtRouteMiddleware(async(to, from) => {
	// console.log(profile.value)
	// let jwt = decodeToken(token.value)
	let key = token.value
	if (!key) {
		return navigateTo('/form-phone')
	}
	// let jwt = ''
	// console.log(jwt)
	// console.log(jwt.dataToken)
	// console.log()
	// auth.setBearer(key)
	// profile.setProfile(Profile.value)
})