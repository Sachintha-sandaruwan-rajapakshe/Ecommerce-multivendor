package com.sachi.Service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailException;
import org.springframework.mail.MailSendException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender javaMailSender;
    
    @Value("${spring.mail.username}") // inject from properties/.env
    private String fromEmail;

    public void sendVerificationOtpEmail(String userEmail, String otp, String subject, String text) throws MessagingException {
        try {
            MimeMessage mimeMessage = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");

            helper.setSubject(subject);
            helper.setText(text, true); // true => allow HTML
            helper.setTo(userEmail);
            helper.setFrom(fromEmail);

            javaMailSender.send(mimeMessage);

        } catch (MailException e) {
            e.printStackTrace(); // Replace with proper logger in production
            throw new MailSendException("Failed to send OTP to " + userEmail, e);
        }
    }
}
