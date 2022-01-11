<template>
  <div class="development">
    <header >
      <div class="container text-center" data-aos="fade-down">
        <h1>发展历程</h1>
        <p>Development History</p>
      </div>
    </header>
    <section class="timeline">
      <div class="container">
        <div
          class="timeline-item"
          data-aos="fade-up"
          v-for="(item, index) in timelineList"
          :key="index"
        >
          <div class="timeline-img"></div>

          <div class="timeline-content js--fadeInLeft">
            <h2>{{ item.title }}</h2>
            <div class="date">{{ item.date }}</div>
            <p>
              {{ item.desic }}
            </p>
            <a class="bnt-more" href="javascript:void(0)">{{ item.loding }}</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Development",
  data() {
    return {
      timelineList: [
        {
          title: "摘要",
          date: "2022 01 01",
          desic: ` 要想清楚，公司摘要，到底是一种怎么样的存在。 带着这些问题，我们来审视一下公司摘要。 奥斯特洛夫斯基在不经意间这样说过，共同的事业，共同的斗争，可以使人们产生忍受一切的力量。　带着这句话，我们还要更加慎重的审视这个问题： 可是，即使是这样，公司摘要的出现仍然代表了一定的意义。 德谟克利特曾经提到过，节制使快乐增加并使享受加强。这似乎解答了我的疑惑。 所谓公司摘要，关键是公司摘要需要如何写。 从这个角度来看， 现在，解决公司摘要的问题，是非常非常重要的。 所以。`,
          loding: "More",
        },
        {
          title: "摘要",
          date: "2022 01 01",
          desic: ` 要想清楚，公司摘要，到底是一种怎么样的存在。 带着这些问题，我们来审视一下公司摘要。 奥斯特洛夫斯基在不经意间这样说过，共同的事业，共同的斗争，可以使人们产生忍受一切的力量。　带着这句话，我们还要更加慎重的审视这个问题： 可是，即使是这样，公司摘要的出现仍然代表了一定的意义。 德谟克利特曾经提到过，节制使快乐增加并使享受加强。这似乎解答了我的疑惑。 所谓公司摘要，关键是公司摘要需要如何写。 从这个角度来看， 现在，解决公司摘要的问题，是非常非常重要的。 所以。`,
          loding: "More",
        },
        {
          title: "摘要",
          date: "2022 01 01",
          desic: ` 要想清楚，公司摘要，到底是一种怎么样的存在。 带着这些问题，我们来审视一下公司摘要。 奥斯特洛夫斯基在不经意间这样说过，共同的事业，共同的斗争，可以使人们产生忍受一切的力量。　带着这句话，我们还要更加慎重的审视这个问题： 可是，即使是这样，公司摘要的出现仍然代表了一定的意义。 德谟克利特曾经提到过，节制使快乐增加并使享受加强。这似乎解答了我的疑惑。 所谓公司摘要，关键是公司摘要需要如何写。 从这个角度来看， 现在，解决公司摘要的问题，是非常非常重要的。 所以。`,
          loding: "More",
        },
        {
          title: "摘要",
          date: "2022 01 01",
          desic: ` 要想清楚，公司摘要，到底是一种怎么样的存在。 带着这些问题，我们来审视一下公司摘要。 奥斯特洛夫斯基在不经意间这样说过，共同的事业，共同的斗争，可以使人们产生忍受一切的力量。　带着这句话，我们还要更加慎重的审视这个问题： 可是，即使是这样，公司摘要的出现仍然代表了一定的意义。 德谟克利特曾经提到过，节制使快乐增加并使享受加强。这似乎解答了我的疑惑。 所谓公司摘要，关键是公司摘要需要如何写。 从这个角度来看， 现在，解决公司摘要的问题，是非常非常重要的。 所以。`,
          loding: "More",
        },
        {
          title: "摘要",
          date: "2022 01 01",
          desic: `要想清楚，公司摘要，到底是一种怎么样的存在。 带着这些问题，我们来审视一下公司摘要。 奥斯特洛夫斯基在不经意间这样说过，共同的事业，共同的斗争，可以使人们产生忍受一切的力量。　带着这句话，我们还要更加慎重的审视这个问题： 可是，即使是这样，公司摘要的出现仍然代表了一定的意义。 德谟克利特曾经提到过，节制使快乐增加并使享受加强。这似乎解答了我的疑惑。 所谓公司摘要，关键是公司摘要需要如何写。 从这个角度来看， 现在，解决公司摘要的问题，是非常非常重要的。 所以。`,
          loding: "More",
        },
        {
          title: "摘要",
          date: "2022 01 01",
          desic: ` 要想清楚，公司摘要，到底是一种怎么样的存在。 带着这些问题，我们来审视一下公司摘要。 奥斯特洛夫斯基在不经意间这样说过，共同的事业，共同的斗争，可以使人们产生忍受一切的力量。　带着这句话，我们还要更加慎重的审视这个问题： 可是，即使是这样，公司摘要的出现仍然代表了一定的意义。 德谟克利特曾经提到过，节制使快乐增加并使享受加强。这似乎解答了我的疑惑。 所谓公司摘要，关键是公司摘要需要如何写。 从这个角度来看， 现在，解决公司摘要的问题，是非常非常重要的。 所以。`,
          loding: "More",
        },
      ],
    };
  },

};
</script>

<style lang="scss" scoped>
$primary: #c73835;
$dark-primary: #303f9f;
$light-primary: #e9d2c5;
$text: #ffffff;
$primary-text: #212121;
$secondary-text: #757575;
$accent: #c13b1d;

section {
  padding-top: 100px;
}

html,
body {
  overflow-x: hidden;
}

body {
  font-family: "Roboto";
  font-size: 17px;
  font-weight: 400;
  background-color: #eee;
}

h1 {
  font-size: 200%;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 400;
}

header {
  background: $primary;
  color: $text;
  padding: 80px 0;
  margin-top: 50px;

  p {
    font-family: "Allura";
    color: rgba(255, 255, 255, 0.2);
    margin-bottom: 0;
    font-size: 60px;
    margin-top: -30px;
  }
}

.timeline {
  position: relative;

  &::before {
    content: "";
    background: $light-primary;
    width: 5px;
    height: 95%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}

.timeline-item {
  width: 100%;
  margin-bottom: 70px;

  &:nth-child(even) {
    .timeline-content {
      float: right;
      padding: 40px 30px 10px 30px;

      .date {
        right: auto;
        left: 0;
      }

      &::after {
        content: "";
        position: absolute;
        border-style: solid;
        width: 0;
        height: 0;
        top: 30px;
        left: -15px;
        border-width: 10px 15px 10px 0;
        border-color: transparent #f5f5f5 transparent transparent;
      }
    }
  }

  &::after {
    content: "";
    display: block;
    clear: both;
  }
}

.timeline-content {
  position: relative;
  width: 45%;
  padding: 10px 30px;
  border-radius: 4px;
  background: #f5f5f5;
  box-shadow: 0 20px 25px -15px rgba(0, 0, 0, 0.3);

  &::after {
    content: "";
    position: absolute;
    border-style: solid;
    width: 0;
    height: 0;
    top: 30px;
    right: -15px;
    border-width: 10px 0 10px 15px;
    border-color: transparent transparent transparent #f5f5f5;
  }
}

.timeline-img {
  width: 30px;
  height: 30px;
  background: $primary;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  margin-top: 25px;
  margin-left: -15px;
}

a {
  background: $primary;
  color: $text;
  padding: 8px 20px;
  text-transform: uppercase;
  font-size: 14px;
  margin-bottom: 20px;
  margin-top: 10px;
  display: inline-block;
  border-radius: 2px;
  box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.6);

  &:hover,
  &:active,
  &:focus {
    background: darken($primary, 10%);
    color: $text;
    text-decoration: none;
  }
}

.timeline-card {
  padding: 0 !important;

  p {
    padding: 0 20px;
  }

  a {
    margin-left: 20px;
  }
}

.timeline-item {
  .timeline-img-header {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)),
      url("https://picsum.photos/1000/800/?random") center center no-repeat;
    background-size: cover;
  }
}

.timeline-img-header {
  height: 200px;
  position: relative;
  margin-bottom: 20px;

  h2 {
    color: $text;
    position: absolute;
    bottom: 5px;
    left: 20px;
  }
}

blockquote {
  margin-top: 30px;
  color: $secondary-text;
  border-left-color: $primary;
  padding: 0 20px;
}

.date {
  background: $accent;
  display: inline-block;
  color: $text;
  padding: 10px;
  position: absolute;
  top: 0;
  right: 0;
}

@media screen and (max-width: 768px) {
  .timeline {
    &::before {
      left: 50px;
    }

    .timeline-img {
      left: 50px;
    }

    .timeline-content {
      max-width: 100%;
      width: auto;
      margin-left: 70px;
    }

    .timeline-item {
      &:nth-child(even) {
        .timeline-content {
          float: none;
        }
      }

      &:nth-child(odd) {
        .timeline-content {
          &::after {
            content: "";
            position: absolute;
            border-style: solid;
            width: 0;
            height: 0;
            top: 30px;
            left: -15px;
            border-width: 10px 15px 10px 0;
            border-color: transparent #f5f5f5 transparent transparent;
          }
        }
      }
    }
  }
}
</style>
