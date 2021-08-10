<template>
<div class="profile-user">
    <div class="user">
        <img src="" alt="">
    </div>
    <div class="userInfo">
        <p>登录/注册</p>
        <p>暂无绑定手机号</p>
    </div>
</div>
</template>

<script>
export default {
name:'ProfileUser'
}
</script>

<style scoped>
.profile-user{
    height: 90px;
    background-color: var(--color-tint);
    display: flex;
    color: #fff;
    justify-content: space-around;
    text-align: left;
    border-top: 1px solid rgba(238, 238, 238, 0.1);
}

.user{
    flex: 1;
    background-color: #fff;
    height: 80px;
    width: 80px;
    border-radius: 50%;
    margin-left: 10px;
    margin-top: 5px;
}

.userInfo{
    flex: 3;
}

.userInfo p{
    margin: 15px 15px;
}
</style>