<?php
include 'travel-data.inc.php';
function generateLink($url, $label, $class) {
   $link = '<a href="' . $url . '" class="' . $class . '">';
   $link .= $label;
   $link .= '</a>';
   return $link;
}


function outputPostRow($number)  {
    $maindiv ='<div class="row"><div class="col-md-4">';
        $img1='<img src="../images/';
        $url2 ='post.php?id=';
        if($number == 1){
            global $postId1;
            global $thumb1;
            global $title1;
            global $userId1;
            global $userName1;
            global $date1;
            global $reviewsRating1;
            global $reviewsNum1;
            global $excerpt1;
            $url2 .=$postId1;
            $img1 .=$thumb1;
            $img1 .='" alt="';
            $img1 .=$title1;
            $img1 .='" class="img-responsive"/>';
            $linka =generateLink($url2,$img1,null);
            $maindiv .=$linka;
            $maindiv .='</div><div class="col-md-8"><h2>';
            $maindiv .=$title1;
            $maindiv .='</h2><div class="details">Posted by<a href="user.php?id=';
            $maindiv .=$userId1;
            $maindiv .= '" class="">';
            $maindiv .=$userName1;
            $maindiv .='</a><span class="pull-right">';
            $maindiv .=$date1;
            $maindiv .='</span><p class="ratings">';
            $maindiv .= constructRating($reviewsRating1);
            $maindiv .=$reviewsNum1;
            $maindiv .=' Reviews</p><p class="excerpt">';
            $maindiv .= $excerpt1;
            $maindiv .='</p><p><a href="post.php?id=';
            $maindiv .=$userId1;
            $maindiv .='" class="btn btn-primary btn-sm">Read more</a></p></div></div></div><hr/>';
        }
        elseif($number == 2){
            global $postId2;
            global $thumb2;
            global $title2;
            global $userId2;
            global $userName2;
            global $date2;
            global $reviewsRating2;
            global $reviewsNum2;
            global $excerpt2;
            $url2 .=$postId2;
            $img1 .=$thumb2;
            $img1 .='" alt ="';
            $img1 .=$title2;
            $img1 .='" class="img-responsive"/>';
            $linka =generateLink($url2,$img1,"");
            $maindiv .=$linka;
            $maindiv .='</div><div class="col-md-8"><h2> ';
            $maindiv .=$title2;
            $maindiv .='</h2><div class="details">Posted by<a href="user.php?id=';
            $maindiv .=$userId2;
            $maindiv .= '" class="">';
            $maindiv .=$userName2;$maindiv .='</a><span class="pull-right">';
            $maindiv .=$date2;
            $maindiv .='</span><p class="ratings">';
            $maindiv .= constructRating($reviewsRating2);
            $maindiv .=$reviewsNum2;
            $maindiv .=' Reviews</p><p class="excerpt">';
            $maindiv .= $excerpt2;
            $maindiv .='</p><p><a href="post.php?id=';
            $maindiv .=$userId2;
            $maindiv .='" class="btn btn-primary btn-sm">Read more</a></p></div></div></div><hr/>';
        }
        elseif($number == 3){
            global $postId3;
            global $thumb3;
            global $title3;
            global $userId3;
            global $userName3;
            global $date3;
            global $reviewsRating3;
            global $reviewsNum3;
            global $excerpt3;
            $url2 .=$postId3;
            $img1 .=$thumb3;
            $img1 .='" alt ="';
            $img1 .=$title3;
            $img1 .='" class="img-responsive"/>';
            $linka =generateLink($url2,$img1,"");
            $maindiv .=$linka;
            $maindiv .='</div><div class="col-md-8"><h2>';
            $maindiv .=$title3;
            $maindiv .='</h2><div class="details">Posted by<a href="user.php?id=';
            $maindiv .=$userId3;
            $maindiv .= '" class="">';
            $maindiv .=$userName3;
            $maindiv .='</a><span class="pull-right">';
            $maindiv .=$date3;
            $maindiv .='</span><p class="ratings">';
            $maindiv .= constructRating($reviewsRating3);
            $maindiv .=$reviewsNum3;
            $maindiv .=' Reviews</p><p class="excerpt">';
            $maindiv .=  $excerpt3;
            $maindiv .='</p><p><a href="post.php?id=';
            $maindiv .=$userId3;
            $maindiv .='" class="btn btn-primary btn-sm">Read more</a></p></div></div></div><hr/>';
        }
        echo $maindiv;
}

/*
  Function constructs a string containing the <img> tags necessary to display
  star images that reflect a rating out of 5
*/
function constructRating($rating) {
    $imgTags = "";
    
    // first output the gold stars
    for ($i=0; $i < $rating; $i++) {
        $imgTags .= '<img src="../images/star-gold.svg" width="16" />';
    }
    
    // then fill remainder with white stars
    for ($i=$rating; $i < 5; $i++) {
        $imgTags .= '<img src="../images/star-white.svg" width="16" />';
    }    
    
    return $imgTags;    
}

?>