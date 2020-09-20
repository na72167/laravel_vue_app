<template>
  <body class="page-withdraw page-1colum">

    <!-- メニュー -->
    <!-- <?php
    require('header.php');
    ?> -->

    <!-- メインコンテンツ -->
    <div id="contents" class="site-width">
      <!-- Main -->
      <section id="main" >
        <div class="form-container">
          <form action="" method="post" class="form">
            <h2 class="title">退会</h2>
            <div class="area-msg">
              <!-- <?php
              if(!empty($err_msg['common'])) echo $err_msg['common'];
              ?> -->
            </div>
            <div class="btn-container">
              <input type="submit" class="btn btn-mid" value="退会する" name="submit">
            </div>
          </form>
        </div>
        <a href="mypage.php">&lt; マイページに戻る</a>
      </section>
    </div>
  </body>
</template>

<style>
  .form .btn{
    float: none;
  }
  .form{
    text-align: center;
  }
</style>
