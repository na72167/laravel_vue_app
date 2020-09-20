<template>
    <body class="page-login page-1colum">

    <!-- ヘッダー -->
    <?php
      require('header.php');
    ?>
    <p id="js-show-msg" style="display:none;" class="msg-slide">
      <?php echo getSessionFlash('msg_success'); ?>
    </p>

    <!-- メインコンテンツ -->
    <div id="contents" class="site-width">

      <!-- Main -->
      <section id="main" >

       <div class="form-container">

         <form action="" method="post" class="form">
           <h2 class="title">ログイン</h2>
           <div class="area-msg">
             <?php
              if(!empty($err_msg['common'])) echo $err_msg['common'];
             ?>
           </div>
           <label class="<?php if(!empty($err_msg['email'])) echo 'err'; ?>">
            メールアドレス
             <input type="text" name="email" value="<?php if(!empty($_POST['email'])) echo $_POST['email']; ?>">
           </label>
           <div class="area-msg">
             <?php
             if(!empty($err_msg['email'])) echo $err_msg['email'];
             ?>
           </div>
           <label class="<?php if(!empty($err_msg['pass'])) echo 'err'; ?>">
             パスワード
             <input type="password" name="pass" value="<?php if(!empty($_POST['pass'])) echo $_POST['pass']; ?>">
           </label>
           <div class="area-msg">
             <?php
             if(!empty($err_msg['pass'])) echo $err_msg['pass'];
             ?>
           </div>
           <label>
             <input type="checkbox" name="pass_save">次回ログインを省略する
           </label>
            <div class="btn-container">
              <input type="submit" class="btn btn-mid" value="ログイン">
            </div>
            パスワードを忘れた方は<a href="passRemindSend.php">コチラ</a>
         </form>
       </div>

      </section>

    </div>

    <!-- footer -->
    <?php
    require('footer.php');
    ?>
</body>
</template>
