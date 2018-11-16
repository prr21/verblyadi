<?php
	echo '<div class="modal fade show" id="formForJob" tabindex="-1" role="dialog" aria-hidden="true">
		  <div class="modal-dialog modal-dialog-centered" role="document">
		    <div class="modal-content">
	
		      <div class="modal-header">
		        <h5 class="modal-title">Контракт верблядей.</h5>
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
				<div class="text-center">
				  <img src="img/contract.jpg" alt="Контракт, Вербляди" title="Подписывай быстрей, сука">
				</div>			
		      <form action="backend/send.php" method="post" target="_blank" onsubmit="return formValid(this)">
		        <div class="modal-body">				
		            <div class="form-group">
		            	<label for="userName-text" class="col-form-label">Имя и фамилия:</label>
			            <input type="text" name="userName" id="userName-text" class="form-control" placeholder="Или можно ссылку в вк" required>
			            <div class="invalid-feedback"></div>
			        </div>
		          <div class="form-row">
			        <div class="form-group col-auto mb-0">
			        	<label for="userLevel-text" class="col-form-label">Уровень:</label>		        	
			        </div>		        
			        <div class="form-group col-3 col-sm-2 mb-0">
			          <input type="number" name="userLevel" id="userLevel-text" aria-describedby="userLevel-help" class="form-control" required>
			          <div class="invalid-feedback"></div>
			        </div>
			        <div class="mb-3">
			          <small id="userLevel-help" class="form-text text-muted"><a href="#" onclick="confirm('Вы будете перенапревлены к тесту, все введенные данные будут утеряны, вы уверенны?')? location.href = 'games.html' : alert('Смотри тогда не наеби');" class="nav-link" title="Вы будете направлены к тесту"><span class="icon-info"></span> Не знайте ваш уровень?</a></small>
			        </div>
			  	  </div>
			      <div class="form-group">
			      	<label for="emailText" class="col-form-label">Email:</label>
		            <input type="email" name="email" id="email-text" class="form-control" placeholder="Если не вводили ссылку вк">
		            <div class="invalid-feedback"></div>
		          </div>
		          <div class="form-group">
		            <label for="message-text" class="col-form-label">Почему вы хотите быть с нами:</label>
		            <textarea class="form-control" name="message" id="message-text" placeholder="Немного о себе" required></textarea>
		            <div class="invalid-feedback"></div>
		          </div>				        				
		        </div>
		        <div class="modal-footer">
		            <div class="g-recaptcha mb-3" data-sitekey="6LecFVwUAAAAAJny68T70GaCeKzpeX7FVN4yILJl"></div>
	                <button type="submit" class="btn btn-success">Ебануть</button>
		        </div>
		      </form>
	
		    </div>
		</div>
	  </div>
	  <script src="js/parts/formValid.js"></script>'
?>