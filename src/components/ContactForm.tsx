import { useRef, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import {
  AlertCircle,
  Check,
  ClipboardCheck,
  MessageCircle,
  RotateCcw,
  Send,
} from 'lucide-react';
import { serviceNames } from '../data/services';
import { hasWhatsapp, whatsappLink } from '../config/site';
import { Button } from './ui/Button';
import { cn } from '../lib/utils';

type FormValues = {
  name: string;
  businessName: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const emptyValues: FormValues = {
  name: '',
  businessName: '',
  phone: '',
  email: '',
  service: '',
  message: '',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.';
  } else if (values.name.trim().length < 2) {
    errors.name = 'Please enter at least 2 characters.';
  }

  if (values.phone.trim()) {
    const digits = values.phone.replace(/\D/g, '');
    if (digits.length < 7) {
      errors.phone = 'Please enter a valid phone number, or leave it blank.';
    }
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address, e.g. name@business.com.';
  }

  if (!values.message.trim()) {
    errors.message = 'Please tell us a little about what you need.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Please add a little more detail (at least 10 characters).';
  }

  return errors;
}

function buildMessage(values: FormValues): string {
  const lines = [
    'New enquiry for Bishora',
    '',
    `Name: ${values.name.trim()}`,
    values.businessName.trim() ? `Business: ${values.businessName.trim()}` : '',
    values.phone.trim() ? `Phone: ${values.phone.trim()}` : '',
    `Email: ${values.email.trim()}`,
    values.service ? `Service interested in: ${values.service}` : '',
    '',
    'Message:',
    values.message.trim(),
  ];

  return lines.filter((line, index) => line !== '' || index === 0).join('\n');
}

const fieldBase =
  'w-full rounded-xl border bg-white px-4 py-3 text-[0.95rem] text-ink-900 placeholder:text-ink-400 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white';

const labelBase = 'mb-1.5 block text-sm font-semibold text-ink-800';

export type ContactFormProps = {
  /** Pre-selects a service (used when arriving from a specific service CTA). */
  initialService?: string;
};

export function ContactForm({ initialService = '' }: ContactFormProps) {
  const [values, setValues] = useState<FormValues>({
    ...emptyValues,
    service: initialService,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const update =
    (field: keyof FormValues) =>
    (
      event: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
    const { value } = event.target;
    setValues((current) => ({ ...current, [field]: value }));

    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstInvalid = (Object.keys(nextErrors) as Array<keyof FormValues>)[0];
    if (firstInvalid) {
      const field = formRef.current?.querySelector<HTMLElement>(`#field-${firstInvalid}`);
      field?.focus();
      return;
    }

    setSubmitted(true);
    window.setTimeout(() => successRef.current?.focus(), 60);
  };

  const reset = () => {
    setValues(emptyValues);
    setErrors({});
    setSubmitted(false);
    setCopied(false);
  };

  const copyMessage = async () => {
    const text = buildMessage(values);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(false);
    }
  };

  if (submitted) {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-brand-100 bg-brand-50/60 p-7 focus:outline-none sm:p-9"
      >
        <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-600 text-white">
          <Check className="size-6" aria-hidden="true" />
        </span>

        <h2 className="mt-5 font-display text-2xl font-bold text-ink-950">
          Thanks{values.name.trim() ? `, ${values.name.trim().split(' ')[0]}` : ''} — your message is ready.
        </h2>

        <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-ink-700">
          Your details have been checked and formatted. This website form is
          not connected to a server yet, so nothing has been submitted behind
          the scenes. Use one of the options below to reach the team directly.
        </p>

        <dl className="mt-6 grid gap-x-8 gap-y-4 rounded-xl border border-ink-100 bg-white p-5 sm:grid-cols-2">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
              Name
            </dt>
            <dd className="mt-1 text-[0.95rem] font-medium text-ink-900">
              {values.name}
            </dd>
          </div>
          {values.businessName ? (
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                Business
              </dt>
              <dd className="mt-1 text-[0.95rem] font-medium text-ink-900">
                {values.businessName}
              </dd>
            </div>
          ) : null}
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
              Email
            </dt>
            <dd className="mt-1 break-all text-[0.95rem] font-medium text-ink-900">
              {values.email}
            </dd>
          </div>
          {values.service ? (
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                Service
              </dt>
              <dd className="mt-1 text-[0.95rem] font-medium text-ink-900">
                {values.service}
              </dd>
            </div>
          ) : null}
          <div className="sm:col-span-2">
            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
              Message
            </dt>
            <dd className="mt-1 whitespace-pre-line text-[0.95rem] leading-relaxed text-ink-700">
              {values.message}
            </dd>
          </div>
        </dl>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {hasWhatsapp() ? (
            <Button
              href={whatsappLink(buildMessage(values))}
              variant="whatsapp"
              icon={<MessageCircle className="size-5" aria-hidden="true" />}
            >
              Send on WhatsApp
            </Button>
          ) : null}

          <Button
            variant="outline"
            onClick={copyMessage}
            icon={
              copied ? (
                <Check className="size-5 text-emerald-600" aria-hidden="true" />
              ) : (
                <ClipboardCheck className="size-5" aria-hidden="true" />
              )
            }
          >
            {copied ? 'Copied to clipboard' : 'Copy message'}
          </Button>

          <Button
            variant="ghost"
            onClick={reset}
            icon={<RotateCcw className="size-4" aria-hidden="true" />}
          >
            Write another message
          </Button>
        </div>

        {copied ? (
          <p className="mt-4 text-sm text-emerald-700" role="status">
            Message copied. Paste it into WhatsApp, email or a message.
          </p>
        ) : null}
      </div>
    );
  }

  const errorEntries = (Object.keys(errors) as Array<keyof FormValues>).filter(
    (key) => errors[key],
  );

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-ink-100 bg-white p-6 shadow-soft sm:p-8"
    >
      <div className="flex items-start gap-3">
        <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
          <Send className="size-5" aria-hidden="true" />
        </span>
        <div>
          <h2 className="font-display text-xl font-bold text-ink-950">
            Tell us about your business
          </h2>
          <p className="mt-1 text-sm text-ink-600">
            Fields marked with an asterisk are required.
          </p>
        </div>
      </div>

      {errorEntries.length > 0 ? (
        <div
          role="alert"
          className="mt-6 flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <p>
            Please check {errorEntries.length === 1 ? 'the highlighted field' : 'the highlighted fields'} below.
          </p>
        </div>
      ) : null}

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="field-name" className={labelBase}>
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="field-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={update('name')}
            aria-required="true"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'error-name' : undefined}
            className={cn(
              fieldBase,
              errors.name ? 'border-red-400' : 'border-ink-200 hover:border-ink-300',
            )}
            placeholder="Your full name"
          />
          {errors.name ? (
            <p id="error-name" className="mt-1.5 text-sm font-medium text-red-700">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="field-businessName" className={labelBase}>
            Business name <span className="font-normal text-ink-400">(optional)</span>
          </label>
          <input
            id="field-businessName"
            name="businessName"
            type="text"
            autoComplete="organization"
            value={values.businessName}
            onChange={update('businessName')}
            className={cn(fieldBase, 'border-ink-200 hover:border-ink-300')}
            placeholder="Your business or shop name"
          />
        </div>

        <div>
          <label htmlFor="field-phone" className={labelBase}>
            Phone <span className="font-normal text-ink-400">(optional)</span>
          </label>
          <input
            id="field-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={values.phone}
            onChange={update('phone')}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'error-phone' : undefined}
            className={cn(
              fieldBase,
              errors.phone ? 'border-red-400' : 'border-ink-200 hover:border-ink-300',
            )}
            placeholder="Your contact number"
          />
          {errors.phone ? (
            <p id="error-phone" className="mt-1.5 text-sm font-medium text-red-700">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="field-email" className={labelBase}>
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id="field-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={values.email}
            onChange={update('email')}
            aria-required="true"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'error-email' : undefined}
            className={cn(
              fieldBase,
              errors.email ? 'border-red-400' : 'border-ink-200 hover:border-ink-300',
            )}
            placeholder="name@business.com"
          />
          {errors.email ? (
            <p id="error-email" className="mt-1.5 text-sm font-medium text-red-700">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="field-service" className={labelBase}>
            Service you are interested in{' '}
            <span className="font-normal text-ink-400">(optional)</span>
          </label>
          <select
            id="field-service"
            name="service"
            value={values.service}
            onChange={update('service')}
            className={cn(
              fieldBase,
              'appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-11',
              'border-ink-200 hover:border-ink-300',
            )}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234e6a8c' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
            }}
          >
            <option value="">Not sure yet — please advise</option>
            {serviceNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
            <option value="Multiple services">Multiple services</option>
            <option value="Something else">Something else</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="field-message" className={labelBase}>
            Message <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="field-message"
            name="message"
            rows={6}
            value={values.message}
            onChange={update('message')}
            aria-required="true"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? 'error-message' : 'hint-message'
            }
            className={cn(
              fieldBase,
              'resize-y',
              errors.message ? 'border-red-400' : 'border-ink-200 hover:border-ink-300',
            )}
            placeholder="What do you sell, who are your customers, and what would you like to improve?"
          />
          {errors.message ? (
            <p id="error-message" className="mt-1.5 text-sm font-medium text-red-700">
              {errors.message}
            </p>
          ) : (
            <p id="hint-message" className="mt-1.5 text-sm text-ink-500">
              The more detail you give, the more useful our first reply will be.
            </p>
          )}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg">
          Send enquiry
        </Button>

        <p className="text-sm text-ink-500">
          We reply as quickly as we can, usually within one working day.
        </p>
      </div>
    </form>
  );
}
