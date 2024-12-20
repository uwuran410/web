// Danh sách các bài blog mặc định
const defaultBlogs = [
    { 
        title: 'Sushi Nhật Bản - Nghệ Thuật Ẩm Thực', 
        content: 'Sushi là món ăn truyền thống của Nhật Bản, nổi tiếng với sự tinh tế và đẹp mắt. Món sushi không chỉ là một bữa ăn ngon mà còn là một tác phẩm nghệ thuật đích thực. \n\nNguyên liệu gồm có gạo sushi, rong biển, các loại hải sản tươi sống như cá hồi, cá ngừ, tôm, và các loại rau củ như dưa chuột, bơ. Để làm sushi, trước tiên bạn cần nấu gạo sushi và trộn đều với giấm sushi, đường, muối. \n\nViệc cuộn sushi đòi hỏi kỹ năng, nhưng điều thú vị là quá trình này giúp tôi thư giãn và tập trung. Mỗi miếng sushi là một tác phẩm nghệ thuật nhỏ. Khi thưởng thức sushi, tôi cảm nhận được sự tươi ngon của hải sản kết hợp với vị dẻo của gạo và giòn của rau củ. Sushi không chỉ là món ăn, mà còn là một nghệ thuật ẩm thực đặc sắc của Nhật Bản.', 
        image: 'images4/sushi1.jpg' 
    },
    { 
        title: 'Tacos Mexico - Sự Kết Hợp Hoàn Hảo', 
        content: 'Tacos là món ăn đường phố nổi tiếng của Mexico, với sự kết hợp hoàn hảo giữa vỏ bánh mềm và nhân đa dạng. Món ăn này thích hợp cho những bữa tiệc hoặc các bữa ăn nhanh. \n\nNguyên liệu bao gồm vỏ bánh tacos, thịt bò, thịt gà, hoặc thịt heo, hành tây, cà chua, rau sống, phô mai, và các gia vị như tỏi, ớt, tiêu, nước chanh. \n\nQuá trình làm tacos bắt đầu với việc nấu chín thịt với tỏi, ớt, tiêu, và nước chanh. Sau đó, chuẩn bị vỏ bánh tacos nướng nhẹ cho giòn. Hoàn thiện món ăn bằng cách xếp nhân thịt vào vỏ bánh, thêm hành tây, cà chua, rau sống, và phô mai. Tacos ngon nhất khi ăn nóng, kèm theo sốt salsa và chanh.', 
        image: 'images/tacos1.jpg' 
        
    },
    { 
        title: 'Pad Thai - Hương Vị Đặc Trưng Thái Lan', 
        content: 'Pad Thai là món ăn truyền thống của Thái Lan, nổi tiếng với hương vị đặc trưng và sự kết hợp tinh tế giữa các nguyên liệu. Đây là món ăn mà bạn không thể bỏ qua khi thưởng thức ẩm thực Thái Lan. \n\nNguyên liệu gồm có mì gạo, tôm, thịt gà, hoặc đậu hủ, trứng, giá đỗ, hẹ, đậu phộng, nước mắm, đường, giấm, và tương ớt. \n\nQuá trình làm Pad Thai bắt đầu với việc ngâm mềm mì gạo, sau đó xào trứng, tôm, mì gạo với giá đỗ, hẹ, nước mắm, đường, giấm, và tương ớt. Hoàn thiện món ăn bằng cách rắc đậu phộng giã nhỏ lên trên và trang trí bằng chanh và rau thơm. Pad Thai thường được ăn kèm với đậu phộng giã nhỏ và chanh.', 
        image: 'images4/padthai1.jpg' 
    },
    { 
        title: 'Panna Cotta - Tráng Miệng Ngọt Ngào Ý', 
        content: 'Panna Cotta là món tráng miệng nổi tiếng của Ý, với kết cấu mịn màng và hương vị ngọt ngào. Món ăn này lý tưởng để kết thúc một bữa ăn ngon miệng. \n\nNguyên liệu gồm có kem tươi, sữa, đường, gelatin, vani, và trái cây tươi. Quá trình làm Panna Cotta bắt đầu với việc nấu kem tươi, sữa, đường, và vani trên lửa nhỏ cho đến khi hòa tan. Sau đó, thêm gelatin đã ngâm nước lạnh vào hỗn hợp kem và đổ vào khuôn. \n\nLàm lạnh hỗn hợp trong tủ lạnh ít nhất 4 giờ để Panna Cotta đạt độ mịn màng và đông đặc. Panna Cotta thường được ăn kèm với trái cây tươi hoặc sốt trái cây để tăng thêm hương vị. Món tráng miệng này không chỉ ngon mà còn đẹp mắt, là sự kết thúc hoàn hảo cho một bữa ăn.', 
        image: 'images4/panacotta1.jpg' 
    },
];

// Hiển thị các bài blog mặc định
defaultBlogs.forEach(blog => {
    createPost(blog.title, blog.content, blog.image);
});

// Hàm tạo bài blog
function createPost(title, content, image) {
    const post = document.createElement('div');
    post.classList.add('post');

    const postTitle = document.createElement('h3');
    postTitle.innerText = title;

    const postContent = document.createElement('div');
    postContent.classList.add('post-content');
    
    const postParagraph = document.createElement('p');
    postParagraph.innerText = content;
    postContent.appendChild(postParagraph);
    
    const postTime = document.createElement('p');
    postTime.classList.add('post-time');
    postTime.innerText = formatDate(new Date());
    post.appendChild(postTime);

    post.appendChild(postTitle);
    post.appendChild(postContent);

    if (image) {
        const postImage = document.createElement('img');
        postImage.src = image;
        postImage.classList.add('post-image');
        post.appendChild(postImage);
    }

    const postsContainer = document.getElementById('posts');
    if (postsContainer.firstChild) {
        postsContainer.insertBefore(post, postsContainer.firstChild);
    } else {
        postsContainer.appendChild(post);
    }
}
// Hàm ngày giờ
function formatDate(date) {
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    return `${day}/${month}/${year} ${hours}:${minutes}`;
}

// Xử lý sự kiện khi gửi biểu mẫu
document.getElementById('post-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const imageFile = document.getElementById('image-file').files[0];

    const post = document.createElement('div');
    post.classList.add('post');

    const postTitle = document.createElement('h3');
    postTitle.innerText = title;

    const postContent = document.createElement('div');
    postContent.classList.add('post-content');
    
    const postParagraph = document.createElement('p');
    postParagraph.innerText = content;
    postContent.appendChild(postParagraph);
    const postTime = document.createElement('p'); 
    postTime.classList.add('post-time'); 
    postTime.innerText = formatDate(new Date()); 
    post.appendChild(postTime); 
    post.appendChild(postTitle); 
    post.appendChild(postContent);

    post.appendChild(postTitle);
    post.appendChild(postContent);

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const postImage = document.createElement('img');
            postImage.src = e.target.result;
            postImage.classList.add('post-image');
            post.appendChild(postImage);
        }
        reader.readAsDataURL(imageFile);
    }

    const postsContainer = document.getElementById('posts');
    if (postsContainer.firstChild) {
        postsContainer.insertBefore(post, postsContainer.firstChild);
    } else {
        postsContainer.appendChild(post);
    }

    document.getElementById('post-form').reset();
});



        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
       

  