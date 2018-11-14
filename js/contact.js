$(document).ready(function() {
	var $form = $('form#contactUsForm'),url = 'https://script.google.com/macros/s/AKfycbwGoQHyqB1mhUK6YBIyfu8fkL0ORoSo2bn2OfoL6H07QOwY0Qk/exec'
	$('#contactUs').click(function(e) {
		e.preventDefault();
		var array = jQuery("#contactUsForm").serializeArray();
		console.log(array);
		var data = {};
		jQuery.each(array,function() {
				if ( data[this.name] == undefined )
					data[this.name] = this.value;
				else {
					data[this.name] += ", " + this.value;
				}
		});
		var jqxhr = $.ajax({
			url: url,
			method: "GET",
			dataType: "json",
			data: data
		}).success(function() {
		});
		var a=document.getElementsByTagName("fieldset");
		a[currentTab].style.display = "none";
		currentTab = 0;
		a[currentTab].style.display = "block";
		$(':input','#contactUsForm')
  		.not(':button, :submit, :reset, :hidden')
  		.val('')
  		.prop('checked', false)
  		.prop('selected', false);
	})
})
