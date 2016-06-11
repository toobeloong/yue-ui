import yueButton from './button/button.vue'

let components = {
	yueButton: yueButton
};

export function install(vue){
	for (let name in components) {
		vue.component(name, components[name]);
	}
};