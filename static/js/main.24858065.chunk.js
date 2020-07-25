(this["webpackJsonpsudoku-app"]=this["webpackJsonpsudoku-app"]||[]).push([[0],{10:function(a,e,t){a.exports=t(30)},15:function(a,e,t){},16:function(a,e,t){},17:function(a,e,t){},30:function(a,e,t){"use strict";t.r(e);var n=t(0),r=t.n(n),o=t(5),i=t.n(o),u=(t(15),t(6)),l=t(7),s=t(1),c=t(9),d=t(8);t(16),t(17);var h=function(a){var e=[];if(null!=a.boardData)for(var t=0,n=function(n){for(var o=function(o){var i=(Math.floor(o/3)+Math.floor(n/3))%2===0?"grayBox":"whiteBox",u=a.boardData[n][o]?a.boardData[n][o]:"",l="inputBox "+i;e.push(r.a.createElement("input",{key:t,id:t++,className:l,type:"text",value:u,onChange:function(e){return a.inputHandler(n,o,e)}}))},i=0;i<a.boardData.length;i++)o(i)},o=0;o<a.boardData.length;o++)n(o);return r.a.createElement("div",null,r.a.createElement("div",{className:"gameBoard"},e))},m=t(18).SudokuGenerator,f=function(a){Object(c.a)(t,a);var e=Object(d.a)(t);function t(a){var n;return Object(u.a)(this,t),(n=e.call(this,a)).state={gameBoardData:[],presetBoardData:[],solutionBoardData:[]},n.inputHandler=n.inputHandler.bind(Object(s.a)(n)),n.initGameBoard=n.initGameBoard.bind(Object(s.a)(n)),n}return Object(l.a)(t,[{key:"initGameBoard",value:function(){m.generate(1);for(var a=m.generatedBoards[0],e=a.getSheet(0),t=[],n=[],r=0;r<9;r++){for(var o=[],i=[],u=0;u<9;u++)""!=e[r][u]?(o.push(e[r][u]),i.push(1)):(o.push(null),i.push(0));t.push(o),n.push(i)}this.setState({gameBoardData:t,presetBoardData:n,solutionBoardData:a.board})}},{key:"validSudokuMove",value:function(a,e,t,n){if(""==n)return!0;if(n=parseInt(n),Number.isNaN(n))return!1;if(n<0||n>t.length)return!1;for(var r=0;r<t[0].length;r++)if(t[a][r]==n&&e!=r)return!1;for(var o=0;o<t.length;o++)if(t[o][e]==n&&a!=o)return!1;for(var i=3*Math.floor(e/3),u=3*Math.floor(a/3),l=0;l<3;l++)for(var s=0;s<3;s++){var c=i+s,d=u+l;if(t[d][c]==n&&(c!=e||d!=a))return!1}return!0}},{key:"checkSolution",value:function(a,e){for(var t=0;t<e.length;t++)for(var n=0;n<e[0].length;n++)if(parseInt(a[t][n])!==e[t][n])return!1;return!0}},{key:"inputHandler",value:function(a,e,t){t.persist(),0==this.state.presetBoardData[a][e]&&(this.validSudokuMove(a,e,this.state.gameBoardData,t.target.value)?this.setState((function(n,r){var o=this.state.gameBoardData;return o[a][e]=t.target.value,this.checkSolution(o,this.state.solutionBoardData)&&alert("Completed!"),{gameBoardData:o}})):alert("invalid move"))}},{key:"componentDidMount",value:function(){this.initGameBoard()}},{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement("h",{className:"mainHeader"},"Sudoku"),r.a.createElement("br",null),r.a.createElement(h,{boardData:this.state.gameBoardData,inputHandler:this.inputHandler}),r.a.createElement("br",null),r.a.createElement("button",{className:"newGameButton",onClick:this.initGameBoard}," New Game "))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.24858065.chunk.js.map