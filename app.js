$(function(){

	var currentText = '';
	var pretemp=0,temp=0,result ,x;
	function render()
	{
		$('#message').text(currentText);
	}
	$('#bdn1').on('click',function()
	{
		currentText = currentText + '1';
		render();
		});
	$('#bdn2').on('click',function()
	{
		currentText = currentText + '2';
		render();
		});
	$('#bdn3').on('click',function()
	{
		currentText = currentText + '3';
		render();
		});
	$('#bdn4').on('click',function()
	{
		currentText = currentText + '4';
		render();
		});
	$('#bdn5').on('click',function()
	{
		currentText = currentText + '5';
		render();
		});
	$('#bdn6').on('click',function()
	{
		currentText = currentText + '6';
		render();
		});
	$('#bdn7').on('click',function()
	{
		currentText = currentText + '7';
		render();
		});
	$('#bdn8').on('click',function()
	{
		currentText = currentText + '8';
		render();
		});
	$('#bdn9').on('click',function()
	{
		currentText = currentText + '9';
		render();
		});
	$('#bdn10').on('click',function()
	{
		currentText = currentText + '0';
		render();
		});
	$('#bdn16').on('click',function()
	{
		currentText = currentText + '.';
		render();
		});
	$('#bdn11').on('click',function()
	{
		x=1;
		if (pretemp==0) 
		{
		pretemp =  parseFloat(currentText);
		currentText = '';
		render();
		}
		else
		{
		temp = pretemp +  parseFloat(currentText);
		currentText = '';
		pretemp=0;
		render();
		}		
	});
	$('#bdn12').on('click',function()
	{
		x=2;
		if (pretemp==0) 
		{
		pretemp =  parseFloat(currentText);
		currentText = '';
		render();
		}
		else
		{
		temp = pretemp -  parseFloat(currentText);
		currentText = '';
		pretemp=0;
		render();
		}		
	});
	$('#bdn13').on('click',function()
	{
		x=3;
		if (pretemp==0) 
		{
		pretemp =  parseFloat(currentText);
		currentText = '';
		render();
		}
		else
		{
		temp = pretemp *  parseFloat(currentText);
		currentText = '';
		pretemp=0;
		render();
		}		
	});
	$('#bdn14').on('click',function()
	{
		x=4;
		if (pretemp==0) 
		{
		pretemp =  parseFloat(currentText);
		currentText = '';
		render();
		}
		else
		{
		temp = pretemp /  parseFloat(currentText);
		currentText = '';
		pretemp=0;
		render();
		}		
	});
	$('#bdn15').on('click',function()
	{
		
		switch(x)
		{
			case 1:
			if (temp==0) 
			{
				result = pretemp + parseFloat(currentText);
				currentText = '';
				$('#message').text(result);
				temp = 0;
				x=0;
				pretemp=0;
				result=0;
				break;
			}
			else
			{
				result = temp + parseFloat(currentText);
				currentText = '';
				$('#message').text(result);
				temp = 0;
				x=0;
				pretemp=0;
				result=0;
				break;
			}
			case 2:
			if (temp==0) 
			{
				result = pretemp - parseFloat(currentText);
				currentText = '';
				$('#message').text(result);
				temp = 0;
				x=0;
				pretemp=0;
				result=0;
				break;
			}
			else
			{
				result = temp - parseFloat(currentText);
				currentText = '';
				$('#message').text(result);
				temp = 0;
				x=0;
				pretemp=0;
				result=0;
				break;
			}
			case 3:
			if (temp==0) 
			{
				result = pretemp * parseFloat(currentText);
				currentText = '';
				$('#message').text(result);
				temp = 0;
				x=0;
				pretemp=0;
				result=0;
				break;
			}
			else
			{
				result = temp * parseFloat(currentText);
				currentText = '';
				$('#message').text(result);
				temp = 0;
				x=0;
				pretemp=0;
				result=0;
				break;
			}
			case 4:
			if (temp==0) 
			{
				result = pretemp / parseFloat(currentText);
				currentText = '';
				$('#message').text(result);
				temp = 0;
				x=0;
				pretemp=0;
				result=0;
				break;
			}
			else
			{
				result = temp / parseFloat(currentText);
				currentText = '';
				$('#message').text(result);
				temp = 0;
				x=0;
				pretemp=0;
				result=0;
				break;
			}
			case 0:
			$('#message').text('請輸入數字~')		
		}
		
		
	});
	$('#bdnclear').on('click',function()
	{
		if (currentText!='') 
		{
			currentText = '';
			temp = 0;
			x='';
			$('#message').text('0');
		}
		else if(currentText=='')
		{
			$('#message').text('0');
		}
		});


});
