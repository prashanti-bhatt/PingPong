<pre>
var court = null
var ball= null
var paddle=null
var dx = 1;
var dy = 1;
var x = null;
var y =null; 	
var y =null; 	
var id = 30;
var scores=0;
var maxscore=0;
var strikes = 0;
var interval = null;

function initialize()
{
	court=document.getElementById(&quot;court&quot;);
	ball=document.getElementById(&quot;ball&quot;);
	paddle = document.getElementById(&quot;paddle&quot;)
	x = ball.getBoundingClientRect().left;
	y = ball.getBoundingClientRect().top;
	console.log(x, y)
	console.log(court.getBoundingClientRect().left, court.getBoundingClientRect().right, court.getBoundingClientRect().top, court.getBoundingClientRect().bottom)
	console.log(ball.getBoundingClientRect().left, ball.getBoundingClientRect().right, ball.getBoundingClientRect().top, ball.getBoundingClientRect().bottom)
}
function movePaddle(e){
var y= e.clientY;

if(y &lt; 400 )
{
	paddle.style.top = y + 'px';
	//console.log(document.getElementById(&quot;paddle&quot;).style.top)
}
}
function startGame(e){
	window.clearInterval(interval)
	interval = setInterval(frame,id);

}
function resetGame(e){
document.getElementById(&quot;strikes&quot;).innerHTML = strikes;
document.getElementById(&quot;score&quot;).innerHTML = maxscore;
 window.clearInterval(interval);
 ball.style.left = 0 ; 
 ball.style.top = 0;
 }

 function setSpeed(value){
	if(value == 0){
		id = 50
		console.log(&quot;0&quot;)
	} 
	else if(value == 1){
		id = 30
		console.log(&quot;1&quot;)
	}
	else if (value == 2){
		id = 10
		console.log(&quot;2&quot;)
	}
}

function frame(){
	console.log(&quot;inside frame&quot;)
	if( y + dy &lt; -90 || y + dy &gt; (court.getBoundingClientRect().bottom - 260)){
			dy = -dy;
		}
	if( x + dx &lt;= 8 ){
			dx= -dx;
		}
	if(x+31 &gt;= paddle.getBoundingClientRect().left &amp;&amp; y+264 &gt;= paddle.getBoundingClientRect().top &amp;&amp; y+264 &lt;= paddle.getBoundingClientRect().bottom)
	{
		
		dx = -dx ;
		strikes++;
		document.getElementById(&quot;strikes&quot;).innerHTML = strikes;
	} 
	if( x + dx &gt;= court.getBoundingClientRect().right -20){
		window.clearInterval(interval);
		ball.style.left=0;
		ball.style.top=0;
		x = ball.getBoundingClientRect().left
		y = ball.getBoundingClientRect().top
		if(strikes&gt;maxscore)
		{
			maxscore=strikes;
			strikes = 0
			document.getElementById(&quot;strikes&quot;).innerHTML = strikes;
			document.getElementById(&quot;score&quot;).innerHTML = maxscore;
		}
	}
		x = x + dx;
		y = y + dy;
		ball.style.top = y +'px';
		ball.style.left = x + 'px';

	
}	
	
			</pre>
