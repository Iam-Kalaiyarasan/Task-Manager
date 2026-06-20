from django.db import models
class Task(models.Model):
    PRIORITY_CHOICES=[
        ('Low','Low'),
        ('Medium','Medium'),
        ('High','High'),
    ]
    title=models.CharField(max_length=100)
    description=models.TextField(blank=True)

    due_date=models.DateField(
        null=True,
        blank=True
    )
    priority=models.CharField(
        max_length=10,
        choices=PRIORITY_CHOICES,
        default='Low'
    )
    completed = models.BooleanField(
        default=False
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.title


