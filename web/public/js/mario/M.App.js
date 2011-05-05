M = window.M || {};
M.App = function()
{
	var canvas = new M.MarioCanvas(500, 200, 200, 200);

	window.addEvent('keydown', function(e)
	{
		switch(e.code)
		{
			case M.KeyCodes.UP:
				canvas.move(0, 5);
				break;
			case M.KeyCodes.DOWN:
				canvas.move(0, -5);
				break;
			case M.KeyCodes.LEFT:
				canvas.move(-5, 0);
				break;
			case M.KeyCodes.RIGHT:
				canvas.move(5, 0);
				break;
		}

	});
}
