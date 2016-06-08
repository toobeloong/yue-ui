import yButton from './button/button.vue'

let components = {
	yButton: yButton
};

export function install(vue){
	for (let name in components) {
		Vue.component(name, components[name]);
	}
};