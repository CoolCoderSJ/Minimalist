function animate_progress(elem, speed, start, end) {
	start += 1
	setInterval(function() {
		if (start != end+1) {
			elem.setAttribute("style", `width: ${start}%`)
			start += 1
		}
	}, speed)
}