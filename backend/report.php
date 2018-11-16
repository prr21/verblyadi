<?php
echo '<div class="modal fade" id="report" tabindex="-1" role="dialog" aria-hidden="true">
       <div class="modal-dialog modal-dialog-centered" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title ml-auto">Сообщить об ошибке.</h5>	        
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          <span aria-hidden="true">&times;</span>
	        </button>
	      </div>	
	      <!-- <form enctype="multipart/form-data" action="report.php" method="post" target="_blank"> -->
	        <div class="modal-body">
			  <div class="text-center pt-2">
	       	    <p>Если вы обнаружили какую-нибудь ошибку (все что угодно, будь то грамматическая ошибка или неровное отображние   элемента), то сообщите пожалуйста об этом нам. Вы можете загрузить скриншот или описать ошибку по форме ниже, этим вы  внесете вклад в развитие сайта, от души.</p>
				<img class="mr-3" src="img/darwin-min.png" alt="Абузьяна нитралируемый">				
			  </div>
					форма пока что не работает
			  <div class="custom-file">
				<input type="file" name="image" accept="image/x-png,image/gif,image/jpeg" disabled class="custom-file-input" id="customFile">
				<label class="custom-file-label" for="customFile">Загрузить скриншот</label>
			  </div>
			  <div class="form-group">
	            <label for="message-report-text" class="col-form-label">Опишите ошибку:</label>
	            <textarea disabled class="form-control" name="message" id="message-report-text"></textarea>
	          </div>
		      <div class="form-group">
		      	<label for="email-report-text" class="col-form-label">Email (Необязательно):</label>
	            <input disabled type="email" name="email" id="email-report-text" class="form-control" placeholder="Чтобы получить отдушинку в карму">
	          </div>
	        </div>
	        <div class="modal-footer">
	          <button type="submit" class="btn btn-success m-auto">Ебануть</button>	    	  
	        </div>
	      <!-- </form> -->
	
	    </div>
	  </div>
	  </div>'
?>