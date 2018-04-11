/**
 * Created by 94216 on 2018/3/28.
 */
import _ from 'lodash';
// import Print from './print';

function component() {
	var element = document.createElement('div');

	// lodash 是由当前 script 脚本 import 导入进来的
	element.innerHTML = _.join(['Hello2', 'webpack'], ' ');
	// element.onclick = Print.bind(null, 'Hello webpack!');

	return element;
}

document.body.appendChild(component());