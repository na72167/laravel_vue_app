<template>
  <body class="page-login page-1colum">

    <!-- ヘッダー -->
    <p id="js-show-msg" style="display:none;" class="msg-slide">
      <!-- サクセスメッセージを出力する処理を書く
        <?php echo getSessionFlash('msg_success'); ?> -->
    </p>

    <!-- メインコンテンツ -->
    <div id="contents" class="site-width">

      <!-- Main -->
      <section id="main" >

       <div class="form-container">

         <form action="" method="post" class="form" @submit.prevent="login">
           <h2 class="title">ログイン</h2>
           <div class="area-msg">
             <!-- 全体的なエラーを吐き出す処理を書く <?php
              if(!empty($err_msg['common'])) echo $err_msg['common'];?>
             -->
           </div>
           <label class="<?php if(!empty($err_msg['email'])) echo 'err'; ?>">
            メールアドレス
             <input type="text" name="email" v-model="loginForm.email">
           </label>
           <div class="area-msg">
             <!-- email関係のエラーを吐き出す処理を書く
             <?php
             if(!empty($err_msg['email'])) echo $err_msg['email'];
             ?>
             -->
           </div>
           <label class="<?php if(!empty($err_msg['pass'])) echo 'err'; ?>">
             パスワード
             <input type="password" name="pass"  v-model="loginForm.password">
           </label>
           <div class="area-msg">
             <!-- password関係のエラーを吐き出す処理を書く
            <?php
             if(!empty($err_msg['pass'])) echo $err_msg['pass'];
             ?>
             -->
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

  </body>
</template>
<script>
  export default {
      data () {
      return {
        loginForm: {
          email: '',
          password: ''
          },
        }
      },
      methods: {
        login() {
          console.log(this.loginForm)
        }
      }
  }
</script>
