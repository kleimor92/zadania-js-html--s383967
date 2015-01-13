UAM.Http = {
	request: function (url, method, requestData, callback) {
			var httpRequest = new XMLHttpRequest();
			httpRequest.onload = function () {
				if (httpRequest.readyState !== 4) {
					return;
				}
				if (httpRequest.status !== 200) {
					throw new Error('Request failed');
				}
			};
			httpRequest.open(method, url);
			httpRequest.responseType="json";
			httpRequest.setRequestHeader('Content-Type', 'application/json');
			httpRequest.send(JSON.stringify(requestData));
			callback.call();
	},

	loadData: function (context, callback) {
		var httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = function() {
			if (httpRequest.readyState !== 4) {
				return;
			}
			if (httpRequest.status !== 200) {
				throw new Error('Request failed');
			}
			var data = JSON.parse(httpRequest.responseText);
			callback.call(context, data);
		}
		httpRequest.open('GET', '/api/todos');
		httpRequest.send();
	}
};
