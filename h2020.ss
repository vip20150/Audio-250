*
	margin 0
	padding 0
	box-sizing border-box
	outline none
	
.player
	display block
	max-width 480px
	margin 1em
	
	&-btn
		border none
		padding .5em .75em
		background none
		font-weight bold
		text-transform uppercase
		font-size .8em
		margin 1em .25em
		color #F33
		border-radius .25em
		cursor pointer
		
		&:hover
			background #F33
			color #FFF
	&-controls
		text-align center
	&-progress
		display block
		width 100%
		height .25em
		background #E0E0E0
		margin .25em 0
		position relative
		
		&-bar
			background #F33
			height 100%
			position absolute
			left 0
			top 0
			
	&-playlist
		list-style none
		overflow auto
		width 100%
		max-height 240px
		margin 0
		padding 0
		margin-top 1em
		border none
		
		
		
		&-current
			color #F33
			border-left .25em solid currentColor
			font-weight bold
		
		li
			display block
			width 100%
			cursor pointer
			padding .5em 1em
			transition all .21s ease
			
			&:hover
				background #E0E0E0
