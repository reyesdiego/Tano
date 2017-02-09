<?php

/** 
 * Project Name : Framework 5.0
 * @package framework
 * @author Creado por: ale. Modificado por:$Author: ale $
 * @version $Revision: 213 $
 * @lastrevision $Date: 2013-01-25 13:58:06 -0300 (vie, 25 ene 2013) $
 */

include_once ('/phpmailer/phpmailer.php');


/**
 * Clase para el envio de mails
 */
class enviarmail extends PHPMailer {

	/**
	 * Envia un mensaje de mail via SMTP
	 * La configuracion del cliente SMTP se toma de Joomla
	 * 
	 * @param string $de
	 * @param string $de_nombre
	 * @param string $para
	 * @param string $cc
	 * @param string $cco
	 * @param string $asunto
	 * @param string $texto
	 * @param string $adjuntos
	 * @param string $IsHTML
	 */
	function enviar_mail ( $de, $de_nombre, $rpl_to, $para, $cc, $cco, $asunto, $texto, $adjuntos, $IsHTML = true )
	{

		$this->Mailer = FRW_mail_mailer;
		$this->Host = FRW_mail_smtphost;
#		$this->SMTPAuth = FRW_mail_smtpauth;
		$this->Username = FRW_mail_username;
		$this->Password = FRW_mail_password;
		$this->Sendmail = FRW_mail_sendmail;
		
		//------------------------------------
		if ( $de == '' ) $de = FRW_mail_remitente;
		if ( $de_nombre == '' ) $de_nombre = FRW_mail_remitente_nombre;
		$this->From = $de;
		$this->FromName = $de_nombre;
		//------------------------------------
		// En modo debug, envia todo el mail a desarrollo
		/*if ( DEBUG ) {
			$para = FRW_mail_desarrollo;
			$cc = '';
			$cco = '';
		}*/
		if ( $para != '' ) {
			$dest = explode ( ',', $para );
			foreach ( $dest as $v ) {
				$this->AddAddress ( trim ( $v ) );
			}
		}
		//------------------------------------
		if ( $cc != '' ) {
			$dest = explode ( ',', $cc );
			foreach ( $dest as $v ) {
				$this->AddCC ( trim ( $v ), '' );
			}
		}
		//------------------------------------
		if ( $cco != '' ) {
			$dest = explode ( ',', $cco );
			foreach ( $dest as $v ) {
				$this->AddBCC ( trim ( $v ), '' );
			}
		}
		//------------------------------------
		if ( $rpl_to != '' ) {
			$respondera = explode ( ',', $rpl_to );
			foreach ( $respondera as $v ) {
				$this->AddReplyTo ( trim ( $v ), '' );
			}
		}
		
		//------------------------------------
		$this->Subject = $asunto;
		$this->IsHTML ( $IsHTML );
		
		$this->Body = $texto;
		
		//------------------------------------
		if ( is_array ( $adjuntos ) ) {
			foreach ( $adjuntos as $v ) {
				$this->AddAttachment ( $v, '' );
			}
		} else {
			if ( $adjuntos != '' ) $this->AddAttachment = $adjuntos;
		}
		
		$this->Send ();
		
		$retval = true;
		if ( $this->ErrorInfo != '' ) {
			$retval = false;
		}
		
		$this->ClearAllRecipients ();
		$this->ClearAttachments ();
		
		//swo_print_r ( $this );
		

		return $retval;
	}
}

?>
