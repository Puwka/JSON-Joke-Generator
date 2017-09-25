new Vue({
  el: '.app',
  data: {
    posts: [],
		currentJoke: "",
		count: "",
		isOk: ""
  },
  created() {
		fetch('http://api.icndb.com/jokes/random?firstName=John&amp;lastName=Doe')
			.then((response) => {
				if (response.ok) {
					return response.json();
				}

				throw new Error('Network response was not ok');
			})
			.then((json) => {
				var quot = /&quot;/gi
				if(json.value.joke.match(quot)) {
					var replaced = json.value.joke.replace(quot, "\"")
					this.posts.length = 0;
					this.posts.push({
						title: json.value.id,
						body: replaced
					});
					this.currentJoke = replaced
					this.count = replaced.length
					if ( this.count > 139) {
						this.isOk = false;
					} else {
						this.isOk = true;
					}
				} else {
				this.posts.length = 0;
				this.posts.push({
					title: json.value.id,
					body: json.value.joke
				});
				this.currentJoke = json.value.joke
				this.count = json.value.joke.length
				if ( this.count > 139) {
					this.isOk = false;
				} else {
					this.isOk = true;
				}
				}
			})
			.catch((error) => {
				console.log(error);
			});
  },
  methods: {
    bc: function() {
      fetch('http://api.icndb.com/jokes/random?firstName=John&amp;lastName=Doe')
        .then((response) => {
          if (response.ok) {
            return response.json();
          }

          throw new Error('Network response was not ok');
        })
        .then((json) => {
					var quot = /&quot;/gi
					if(json.value.joke.match(quot)) {
						var replaced = json.value.joke.replace(quot, "\"")
						this.posts.length = 0;
						this.posts.push({
	            title: json.value.id,
	            body: replaced
	          });
						this.currentJoke = replaced
						this.count = replaced.length
						if ( this.count > 140) {
							this.isOk = false;
						} else {
							this.isOk = true;
						}
					} else {
          this.posts.length = 0;
          this.posts.push({
            title: json.value.id,
            body: json.value.joke
          });
					this.currentJoke = json.value.joke
					this.count = json.value.joke.length
					if ( this.count > 140) {
						this.isOk = false;
					} else {
						this.isOk = true;
					}
					}
        })
        .catch((error) => {
          console.log(error);
        });

    },
		post: function() {
			if(this.isOk) {
			window.open("https://twitter.com/intent/tweet?text=" + this.currentJoke)
		} else {
			alert("Seems like this joke is too long for your followers, but not 4 u, right?")
		}
		}
  }
});
