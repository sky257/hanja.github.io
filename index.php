<!doctype html>
<html>
<head>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
	<link rel="stylesheet" href="default.css?<?=time()?>">

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.js"></script>

</head>

<body>

<div class='header'>
	<div>현서네 한자공부방</div>
</div>


<div class='menu-container'>
	<div id='hanja8'>8급</div>
	<div id='hanja7_total'>7급 - 전체</div>
	<div id='hanja7_01'>7급 - 1</div>
	<div id='hanja7_02'>7급 - 2</div>
	<div id='hanja7_03'>7급 - 3</div>
	<div id='hanja7_04'>7급 - 4</div>
	<div id='hanja7_05'>7급 - 5</div>
	<div id='hanja7_06'>7급 - 6</div>
	<div id='hanja7_07'>7급 - 7</div>
	<!--
	<div id='nature'>자연</div>
	<div id='life'>생활</div>
	<div id='magic1'>마법1</div>
	<div id='magic2'>마법2</div>
	<div id='magic3'>마법3</div>
	<div id='magic4'>마법4</div>
	<div id='magic5'>마법5</div>
	<div id='magic6'>마법6</div>
	<div id='magic7'>마법7</div>
	<div id='magic8'>마법8</div>
	<div id='magic9'>마법9</div>
	<div id='magic10'>마법10</div>
	<div id='magic11'>마법11</div>
	<div id='magic12'>마법12</div>
	<div id='magic13'>마법13</div>
	<div id='magic14'>마법14</div>
	<div id='magic15'>마법15</div>
	<div id='magic16'>마법16</div>
	<div id='magic17'>마법17</div>
	<div id='magic18'>마법18</div>
	<div id='magic19'>마법19</div>
	<div id='magic20'>마법20</div>
	<div id='magic21'>마법21</div>
	<div id='magic22'>마법22</div>
	<div id='magic23'>마법23</div>
	<div id='magic24'>마법24</div>
	<div id='magic25'>마법25</div>
 	<div id='magic26'>마법26</div>
	<div id='magic27'>마법27</div>
	<div id='magic28'>마법28</div>
	<div id='magic29'>마법29</div>
	<div id='magic30'>마법30</div>
	<div id='magic31'>마법31</div>
	<div id='magic32'>마법32</div>
	<div id='magic33'>마법33</div>
	<div id='magic34'>마법34</div>
	<div id='magic35'>마법35</div>
	<div id='magic36'>마법36</div>
	<div id='magic37'>마법37</div>
	<div id='magic38'>마법38</div>
	<div id='magic39'>마법39</div>
	<div id='magic40'>마법40</div>
	<div id='magic41'>마법41</div>
	<div id='magic42'>마법42</div>
	<div id='magic43'>마법43</div>
	<div id='magic44'>마법44</div>
	<div id='magic45'>마법45</div>
	-->
	<!-- <div>수</div> -->
</div>

<div class="card-container">
  <div class="card" id="card">
    <div class="front">
    </div>
    <div class="back">
    </div>
  </div>
</div>

<div class="checkAllDiv" id="checkAllDiv">
	<input type='checkbox' id='checkAllCheckbox' class='checkAllCheckbox' checked onclick='checkAllClicked()'>
	<label for="checkAllCheckbox" class='checkAllLabel'></label>
	<label for="checkAllCheckbox" class="checkAllTextLabel">CheckAll</label>
</div>
<div class="hanja_select_box" id="hanja_select_box"></div>


<audio id="ding" src="/hanja/sound/ding.mp3"></audio>
<audio id="pipe" src="/hanja/sound/pipe.mp3"></audio>
<script src="hanja_data.js?<?=time()?>"></script>
<script src="default.js?<?=time()?>"></script>
</body>
</html>
