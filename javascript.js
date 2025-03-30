// 等待文档完全加载
document.addEventListener("DOMContentLoaded", function () {
  // 获取头像元素
  const avatar = document.querySelector(".avatar");

  // 设置您的邮箱地址
  const emailAddress = "your.email@example.com";

  // 为头像添加点击事件监听器
  avatar.addEventListener("click", function () {
    // 创建提示框显示邮箱
    alert("我的邮箱: " + emailAddress);

    // 或者也可以直接复制邮箱到剪贴板
    navigator.clipboard
      .writeText(emailAddress)
      .then(() => {
        alert("邮箱已复制到剪贴板: " + emailAddress);
      })
      .catch((err) => {
        alert("无法复制邮箱: " + err);
      });
  });

  // 添加鼠标悬停效果，提示用户可以点击
  avatar.style.cursor = "pointer";
  avatar.title = "点击查看我的邮箱";
});
