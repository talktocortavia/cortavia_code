<?php 
$pageTitle = 'Contact';
require_once 'header.php'; 

$message = '';
$messageType = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name'] ?? '');
    $email = htmlspecialchars($_POST['email'] ?? '');
    $subject = htmlspecialchars($_POST['subject'] ?? '');
    $message_text = htmlspecialchars($_POST['message'] ?? '');
    
    if (!empty($name) && !empty($email) && !empty($message_text)) {
        // In a real application, you would send an email here
        // For now, we'll just show a success message
        $message = 'Thank you for your message! We will get back to you at ' . htmlspecialchars($email) . ' within 24 hours.';
        $messageType = 'success';
        
        // Clear form
        $name = $email = $subject = $message_text = '';
    } else {
        $message = 'Please fill in all required fields.';
        $messageType = 'error';
    }
}
?>

<section class="page-header">
    <div class="container">
        <h1>Contact Us</h1>
        <p>Get in touch and let's discuss how we can help your business</p>
    </div>
</section>

<section class="contact-section">
    <div class="container">
        <div class="contact-grid">
            <div class="contact-info">
                <h2>Let's Build Together</h2>
                <p class="contact-description">
                    Ready to transform your business with AI? We're here to help you every step of the way.
                </p>
                
                <div class="contact-details">
                    <div class="contact-item">
                        <div class="contact-item-icon">📧</div>
                        <div>
                            <h4>Email</h4>
                            <a href="mailto:<?php echo SITE_EMAIL; ?>"><?php echo SITE_EMAIL; ?></a>
                            <p style="color: var(--color-text-muted); font-size: 0.9rem; margin-top: 0.5rem;">We'll respond within 24 hours</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="contact-form-wrapper">
                <?php if ($message): ?>
                    <div class="message <?php echo $messageType; ?>">
                        <?php echo $message; ?>
                    </div>
                <?php endif; ?>
                
                <form method="POST" action="contact.php" class="contact-form">
                    <div class="form-group">
                        <label for="name">Name *</label>
                        <input type="text" id="name" name="name" required value="<?php echo isset($name) ? $name : ''; ?>">
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email *</label>
                        <input type="email" id="email" name="email" required value="<?php echo isset($email) ? $email : ''; ?>">
                    </div>
                    
                    <div class="form-group">
                        <label for="subject">Subject</label>
                        <input type="text" id="subject" name="subject" value="<?php echo isset($subject) ? $subject : ''; ?>">
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Message *</label>
                        <textarea id="message" name="message" rows="6" required><?php echo isset($message_text) ? $message_text : ''; ?></textarea>
                    </div>
                    
                    <button type="submit" class="btn btn-primary btn-large">Send Message</button>
                </form>
            </div>
        </div>
    </div>
</section>

<?php require_once 'footer.php'; ?>

